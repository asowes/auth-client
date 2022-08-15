import React, { memo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particle_options, move_with_mouse_options } from "./options";

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  //粒子被正确加载到画布中时，这个函数被调用
  const particlesLoaded = (container) => {
    console.log("123", container);
  };
  return (
    <>
      <Particles
        id="asow-particle"
        init={particlesInit}
        loaded={particlesLoaded}
        options={move_with_mouse_options}
      />
    </>
  );
}

export default memo(Particle);
