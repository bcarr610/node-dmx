type FixtureChannel = {
  name: string;
  midi?: [channel: number, ccOrNote: "CC" | "NOTE", value: number];
};

type Fixture = {
  name: string;
  channels: FixtureChannel[];
};

type Config = {
  dmx: {
    driver: string;
    port: string;
  };
  midi: {
    interface: string;
  };
  fixtures: Fixture[];
};

const config: Config = {
  dmx: {
    driver: "enttec-open-usb-dmx",
    port: "COM3",
  },
  midi: {
    interface: "LoopBe Internal MIDI",
  },
  fixtures: [
    {
      name: "Pan RGB Left",
      channels: [
        {
          name: "Brightness",
          midi: [1, "NOTE", 24],
        },
        {
          name: "Red",
          midi: [1, "NOTE", 25],
        },
        {
          name: "Green",
          midi: [1, "NOTE", 26],
        },
        {
          name: "Blue",
          midi: [1, "NOTE", 27],
        },
        {
          name: "Strobe",
          midi: [1, "NOTE", 28],
        },
        {
          name: "Mode",
          midi: [1, "NOTE", 29],
        },
      ],
    },
    {
      name: "Strobe Panel",
      channels: [
        {
          name: "Brightness",
          midi: [2, "NOTE", 24],
        },
        {
          name: "Red",
          midi: [2, "NOTE", 25],
        },
        {
          name: "Green",
          midi: [2, "NOTE", 26],
        },
        {
          name: "Blue",
          midi: [2, "NOTE", 27],
        },
        {
          name: "Strobe",
          midi: [2, "NOTE", 28],
        },
        {
          name: "Mode 1",
          midi: [2, "NOTE", 29],
        },
        {
          name: "Mode 2",
          midi: [2, "NOTE", 30],
        },
        {
          name: "CH 6 Speed",
          midi: [2, "NOTE", 31],
        },
        {
          name: "Outer LED Effect",
          midi: [2, "NOTE", 32],
        },
        {
          name: "Outer LED Speed",
          midi: [2, "NOTE", 33],
        },
      ],
    },
    {
      name: "Pan RGB Right",
      channels: [
        {
          name: "Brightness",
          midi: [3, "NOTE", 24],
        },
        {
          name: "Red",
          midi: [3, "NOTE", 25],
        },
        {
          name: "Green",
          midi: [3, "NOTE", 26],
        },
        {
          name: "Blue",
          midi: [3, "NOTE", 27],
        },
        {
          name: "Strobe",
          midi: [3, "NOTE", 28],
        },
        {
          name: "Mode",
          midi: [3, "NOTE", 29],
        },
      ],
    },
    {
      name: "Flood Left",
      channels: [
        {
          name: "Brightness",
          midi: [4, "NOTE", 24],
        },
        {
          name: "Red",
          midi: [4, "NOTE", 25],
        },
        {
          name: "Green",
          midi: [4, "NOTE", 26],
        },
        {
          name: "Blue",
          midi: [4, "NOTE", 27],
        },
        {
          name: "White",
          midi: [4, "NOTE", 28],
        },
        {
          name: "Strobe",
          midi: [4, "NOTE", 29],
        },
        {
          name: "Fn",
          midi: [4, "NOTE", 30],
        },
        {
          name: "Fn Speed",
          midi: [4, "NOTE", 31],
        },
      ],
    },
    {
      name: "Flood Right",
      channels: [
        {
          name: "Brightness",
          midi: [5, "NOTE", 24],
        },
        {
          name: "Red",
          midi: [5, "NOTE", 25],
        },
        {
          name: "Green",
          midi: [5, "NOTE", 26],
        },
        {
          name: "Blue",
          midi: [5, "NOTE", 27],
        },
        {
          name: "White",
          midi: [5, "NOTE", 28],
        },
        {
          name: "Strobe",
          midi: [5, "NOTE", 29],
        },
        {
          name: "Fn",
          midi: [5, "NOTE", 30],
        },
        {
          name: "Fn Speed",
          midi: [5, "NOTE", 31],
        },
      ],
    },
  ],
};

export default config;
