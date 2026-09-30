import React from 'react';

export interface CTAOrnament {
  name: string;
  src: string;
  width: number;
  height: number;
  style: React.CSSProperties;
  className?: string;
}

export const CTA_ORNAMENTS: CTAOrnament[] = [
  // 1. Lime Squiggle (Top-Left)
  {
    name: 'Lime Squiggle Top-Left',
    src: '/assets/images/cta_squiggle_top_left.png',
    width: 385,
    height: 385,
    style: {
      left: '-8.2%',
      top: '-33.2%',
      width: 'clamp(180px, 26.7vw, 385px)',
      height: 'clamp(180px, 26.7vw, 385px)',
    },
    className: 'opacity-70 sm:opacity-90 lg:opacity-100',
  },
  // 2. White Coil (Upper-Left)
  {
    name: 'White Coil Upper-Left',
    src: '/assets/images/cta_coil_white.png',
    width: 175,
    height: 175,
    style: {
      left: '12.4%',
      top: '1.0%',
      width: 'clamp(90px, 12.1vw, 175px)',
      height: 'clamp(90px, 12.1vw, 175px)',
    },
    className: 'hidden sm:block opacity-80 lg:opacity-100',
  },
  // 3. White Cone (Lower-Left)
  {
    name: 'White Cone Lower-Left',
    src: '/assets/images/cta_cone_white.png',
    width: 188,
    height: 188,
    style: {
      left: '-3.3%',
      top: '46.1%',
      width: 'clamp(95px, 13.0vw, 188px)',
      height: 'clamp(95px, 13.0vw, 188px)',
    },
    className: 'hidden md:block opacity-80 lg:opacity-100',
  },
  // 4. Lime Torus (Bottom-Left)
  {
    name: 'Lime Torus Bottom-Left',
    src: '/assets/images/cta_torus_lime.png',
    width: 342,
    height: 342,
    style: {
      left: '1.4%',
      top: '61.3%',
      width: 'clamp(160px, 23.7vw, 342px)',
      height: 'clamp(160px, 23.7vw, 342px)',
    },
    className: 'opacity-60 sm:opacity-90 lg:opacity-100',
  },
  // 5. Lime Pyramid (Top-Right)
  {
    name: 'Lime Pyramid Top-Right',
    src: '/assets/images/cta_pyramid_lime.png',
    width: 188,
    height: 188,
    style: {
      left: '75.0%',
      top: '0.0%',
      width: 'clamp(100px, 13.0vw, 188px)',
      height: 'clamp(100px, 13.0vw, 188px)',
    },
    className: 'hidden sm:block opacity-80 lg:opacity-100',
  },
  // 6. White Cylinder (Upper-Right)
  {
    name: 'White Cylinder Upper-Right',
    src: '/assets/images/cta_cylinder_white.png',
    width: 370,
    height: 370,
    style: {
      left: '85.1%',
      top: '1.2%',
      width: 'clamp(170px, 25.7vw, 370px)',
      height: 'clamp(170px, 25.7vw, 370px)',
    },
    className: 'hidden sm:block opacity-60 sm:opacity-90 lg:opacity-100',
  },
];
