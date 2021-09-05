// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Three from "three";
import * as Caml_array from "rescript/lib/es6/caml_array.js";
import * as CustomFrag from "/static/Shaders/custom.frag";
import * as CustomVert from "/static/Shaders/custom.vert";

var materialJs = (function(t, shaderVert, shaderFrag) {
        const speedLength = [0.35, 0.45, 0.65];
        const bandWidthLength = [0.003, 0.0025, 0.0015];
        const uniforms = {
            time: { value: 1.0 },
            r: { value: [0.05, 0.15, 0.20, 0.45, 0.825, 0.875, 0.95] },
            speed: {
                value: [
                    speedLength[Math.floor(Math.random() * speedLength.length)],
                    speedLength[Math.floor(Math.random() * speedLength.length)],
                    speedLength[Math.floor(Math.random() * speedLength.length)],
                    speedLength[Math.floor(Math.random() * speedLength.length)],
                    speedLength[Math.floor(Math.random() * speedLength.length)],
                    speedLength[Math.floor(Math.random() * speedLength.length)],
                    speedLength[Math.floor(Math.random() * speedLength.length)],
                ]
            },
            bandWidth: {
                value: [
                    bandWidthLength[Math.floor(Math.random() * bandWidthLength.length)],
                    bandWidthLength[Math.floor(Math.random() * bandWidthLength.length)],
                    bandWidthLength[Math.floor(Math.random() * bandWidthLength.length)],
                    bandWidthLength[Math.floor(Math.random() * bandWidthLength.length)],
                    bandWidthLength[Math.floor(Math.random() * bandWidthLength.length)],
                    bandWidthLength[Math.floor(Math.random() * bandWidthLength.length)],
                    bandWidthLength[Math.floor(Math.random() * bandWidthLength.length)],
                ]
            },
            color: { value: new t.Vector2(0, 0) },
            resolution: { value: new t.Vector2() }
        }

        const material = new t.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: shaderVert.default,
            fragmentShader: shaderFrag.default,
            transparent: true,
        });
        return material;
    });

var t = Three;

var scene = [new (Three.Scene)()];

function geometry(width, height) {
  return new (Three.PlaneBufferGeometry)(width, height);
}

var material = materialJs(t, CustomVert, CustomFrag);

function initScene(width, height) {
  Caml_array.set(scene, 0, new (Three.Scene)());
  var mesh = new (Three.Mesh)(new (Three.PlaneBufferGeometry)(width, height), material);
  Caml_array.get(scene, 0).add(mesh);
  
}

function animate(param) {
  material.uniforms.time.value = material.uniforms.time.value + 0.05;
  
}

var LaserScene = {
  t: t,
  scene: scene,
  geometry: geometry,
  material: material,
  initScene: initScene,
  animate: animate
};

export {
  materialJs ,
  LaserScene ,
  
}
/* t Not a pure module */
