import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import App from "../App";
import APOD from "../components/APOD";
afterEach(rtl.cleanup);

const dataAPOD = {
  copyright: "Markus Bauer",
  date: "2019-09-12",
  explanation:
    "These cosmic dust clouds drift some 1,300 light-years away along the fertile starfields of the constellation Cepheus. The beautiful Iris Nebula, also known as NGC 7023, blossoms at the upper left. Not the only nebula in the sky to evoke the imagery of flowers, its pretty, symmetric form spans about 6 light-years. This nebula's dominant blue color is characteristic of the pervasive dust grains reflecting light from a nearby hot, bluish star. But darker, obscuring dust clouds cover most of the nearly 4 degree wide field of view. At the right is the LDN 1147/1158 complex of Lynds Dark Nebulae. Stars are forming there, still hidden within the dark cloud cores. A search through the sharp image can identify Herbig-Haro objects though, jets of shocked glowing gas emanating from recently formed stars.",
  hdurl:
    "https://apod.nasa.gov/apod/image/1909/IRISNebulaSurroundingsNGC7023.jpg",
  media_type: "image",
  service_version: "v1",
  title: "The Iris Nebula in a Field of Dust",
  url:
    "https://apod.nasa.gov/apod/image/1909/IRISNebulaSurroundingsNGC7023_1100.jpg"
};
describe("App component", () => {
  it("renders correctly", () => {
    const AppComponent = rtl.render(<App />);
    expect(AppComponent.baseElement).toMatchSnapshot();
  });
});

describe("APOD component", () => {
  it("renders correctly", () => {
    const APODcomponent = rtl.render(
      <APOD data={dataAPOD} date={new Date("2019-09-12")} callback={null} />
    );
    expect(APODcomponent.baseElement).toMatchSnapshot();
  });
});
