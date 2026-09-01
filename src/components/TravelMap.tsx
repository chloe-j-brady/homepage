/* For the interactive travel globe, I used Claude (Anthropic)
to help build the initial version and to research the numeric country codes for the visited-countries set. 
That first version used scroll-based rotation and had a bug where visited countries weren't highlighting correctly. 
I debugged and fixed the country-highlighting logic, and reworked the interaction
so the globe rotates via mouse drag instead of scroll.*/ 

import { useState, useRef } from "react";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const visitedCodes = new Set([
  554, 36, 242, 392, 784, 380, 470, 250, 724, 336, 826, 840, 484, 674, 276,
  504, 578, 756, 348, 100, 56, 372, 300, 203, 752, 528, 191, 70, 499, 208,
  620, 442, 616, 320,
]);

function TravelMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  // Horizontal spin (left/right) and vertical tilt (up/down) angles
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState(-15); // starting tilt, same as before

  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const rotationAtDragStart = useRef(0);
  const tiltAtDragStart = useRef(0);

  function handlePointerDown(e: React.PointerEvent) {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    rotationAtDragStart.current = rotation;
    tiltAtDragStart.current = tilt;
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return;

    const deltaX = e.clientX - dragStartX.current;
    const deltaY = e.clientY - dragStartY.current;

    setRotation(rotationAtDragStart.current - deltaX * 0.3);

    // Tilt up/down, but clamp so the globe can't flip past its poles
    const newTilt = tiltAtDragStart.current - deltaY * 0.3;
    setTilt(Math.max(-90, Math.min(90, newTilt)));
  }

  function handlePointerUp() {
    isDragging.current = false;
  }

  return (
    <div
      className="travel-map-wrapper"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{
          scale: 220,
          rotate: [-rotation, -tilt, 0], // [left/right, up/down, roll]
        }}
      >
        <Sphere id="globe-sphere" fill="transparent" stroke="#c9c2e0" strokeWidth={0.5} />
        <Graticule stroke="#e5e1f0" strokeWidth={0.3} />

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const visited = visitedCodes.has(Number(geo.id));
              const name = geo.properties.name as string;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                  className={visited ? "country visited" : "country"}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <div className="map-tooltip">
        {hovered ? hovered : "Drag the globe to rotate it — hover a country to see its name"}
      </div>
    </div>
  );
}

export default TravelMap;