import Image from 'next/image';

export function Auth3DOrnaments() {
  return (
    <>
      {/* 1. Lime Torus 3D (rel_x=54, rel_y=15, 146x146, z-30) */}
      <div className="pointer-events-none absolute top-3.75 left-13.5 z-30 h-36.5 w-36.5">
        <Image
          src="/assets/images/cta_torus_lime.png"
          alt=""
          width={146}
          height={146}
          className="h-full w-full object-contain drop-shadow-md"
        />
      </div>

      {/* 2. White Frosted Coil 3D (rel_x=373, rel_y=321, 175x175, z-25) */}
      <div className="pointer-events-none absolute top-80.25 left-93.25 z-25 h-43.75 w-43.75">
        <Image
          src="/assets/images/cta_coil_white.png"
          alt=""
          width={175}
          height={175}
          className="h-full w-full object-contain drop-shadow-md"
        />
      </div>

      {/* 3. Yellow Pyramid 3D (rel_x=0, rel_y=397, 188x188, z-30) */}
      <div className="pointer-events-none absolute top-99.25 left-0 z-30 h-47 w-47">
        <Image
          src="/assets/images/cta_pyramid_lime.png"
          alt=""
          width={188}
          height={188}
          className="h-full w-full object-contain drop-shadow-lg"
        />
      </div>
    </>
  );
}
