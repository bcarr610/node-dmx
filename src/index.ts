import em from "easymidi";
import config from "./config";
import DMX from "dmx";

console.log("Creating DMX and MIDI interfaces");
const dmx = new DMX();
const universe = dmx.addUniverse("u1", "enttec-open-usb-dmx", config.dmx.port);
const midi = new em.Input(config.midi.interface);

// Kill Lights
console.log("Killing Lights");
universe.updateAll(0);

type MIDIHandler = {
  fixtureName: string;
  channelName: string;
  midiType: "CC" | "NOTE";
  midiChannel: number;
  midiController: number;
  dmxChannel: number;
};

const midiHandlers: MIDIHandler[] = [];

let fixtureStartChannel = 1;
for (let i = 0; i < config.fixtures.length; i++) {
  const fixture = config.fixtures[i];
  for (let j = 0; j < fixture.channels.length; j++) {
    const channel = fixture.channels[j];
    if (channel.midi) {
      const [midiChannel, midiType, midiController] = channel.midi;
      midiHandlers.push({
        fixtureName: fixture.name,
        channelName: channel.name,
        midiType,
        midiChannel,
        midiController,
        dmxChannel: fixtureStartChannel + j,
      });
    }
  }

  fixtureStartChannel += fixture.channels.length;
}

const executeDmxFromMidi = (
  type: "CC" | "NOTE",
  channel: number,
  controller: number,
  value: number,
) => {
  const actions = midiHandlers.filter(
    (f) =>
      f.midiType === type &&
      f.midiChannel === channel + 1 &&
      f.midiController === controller,
  );
  if (actions.length) {
    const update = actions.reduce((p, c) => {
      p[`${c.dmxChannel}`] = value;
      return p;
    }, {});
    universe.update(update);
  }
};

console.log("Creating Listeners...");

midi.on("cc", (cc) => {
  executeDmxFromMidi("CC", cc.channel, cc.controller, cc.value * 2);
});

midi.on("noteon", (note) => {
  executeDmxFromMidi("NOTE", note.channel, note.note, note.velocity * 2);
});

midi.on("noteoff", (note) => {
  executeDmxFromMidi("NOTE", note.channel, note.note, 0);
});

console.log("Ready");
