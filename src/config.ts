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
          midi: [1, "CC", 1],
        },
        {
          name: "Red",
          midi: [1, "CC", 2],
        },
        {
          name: "Green",
          midi: [1, "CC", 3],
        },
        {
          name: "Blue",
          midi: [1, "CC", 4],
        },
        {
          name: "Strobe",
          midi: [1, "CC", 5],
        },
        {
          name: "Mode",
          midi: [1, "CC", 6],
        },
      ],
    },
    {
      name: "Strobe Panel",
      channels: [
        {
          name: "Brightness",
          midi: [2, "CC", 1],
        },
        {
          name: "Red",
          midi: [2, "CC", 2],
        },
        {
          name: "Green",
          midi: [2, "CC", 3],
        },
        {
          name: "Blue",
          midi: [2, "CC", 4],
        },
        {
          name: "Strobe",
          midi: [2, "CC", 5],
        },
        {
          name: "Mode 1",
          midi: [2, "CC", 6],
        },
        {
          name: "Mode 2",
          midi: [2, "CC", 7],
        },
        {
          name: "CH 6 Speed",
          midi: [2, "CC", 8],
        },
        {
          name: "Outer LED Effect",
          midi: [2, "CC", 9],
        },
        {
          name: "Outer LED Speed",
          midi: [2, "CC", 10],
        },
      ],
    },
    {
      name: "Pan RGB Right",
      channels: [
        {
          name: "Brightness",
          midi: [3, "CC", 1],
        },
        {
          name: "Red",
          midi: [3, "CC", 2],
        },
        {
          name: "Green",
          midi: [3, "CC", 3],
        },
        {
          name: "Blue",
          midi: [3, "CC", 4],
        },
        {
          name: "Strobe",
          midi: [3, "CC", 5],
        },
        {
          name: "Mode",
          midi: [3, "CC", 6],
        },
      ],
    },
    {
      name: "Flood Left",
      channels: [
        {
          name: "Brightness",
          midi: [4, "CC", 1],
        },
        {
          name: "Red",
          midi: [4, "CC", 2],
        },
        {
          name: "Green",
          midi: [4, "CC", 3],
        },
        {
          name: "Blue",
          midi: [4, "CC", 4],
        },
        {
          name: "White",
          midi: [4, "CC", 5],
        },
        {
          name: "Strobe",
          midi: [4, "CC", 6],
        },
        {
          name: "Fn",
          midi: [4, "CC", 7],
        },
        {
          name: "Fn Speed",
          midi: [4, "CC", 8],
        },
      ],
    },
    {
      name: "Flood Right",
      channels: [
        {
          name: "Brightness",
          midi: [5, "CC", 1],
        },
        {
          name: "Red",
          midi: [5, "CC", 2],
        },
        {
          name: "Green",
          midi: [5, "CC", 3],
        },
        {
          name: "Blue",
          midi: [5, "CC", 4],
        },
        {
          name: "White",
          midi: [5, "CC", 5],
        },
        {
          name: "Strobe",
          midi: [5, "CC", 6],
        },
        {
          name: "Fn",
          midi: [5, "CC", 7],
        },
        {
          name: "Fn Speed",
          midi: [5, "CC", 8],
        },
      ],
    },
  ],
};

export default config;
