import { v4 } from "uuid";

const TestRun = [
  {
    id: v4(),
    initiator: {
      id: 2,
      name: "Barefoot Ted"
    },
    time: "2018-06-18 10:00 EST",
    place: "CSH State Park Trailhead",
    title: "Shoes optional run!"
  }
];

export default TestRun;
