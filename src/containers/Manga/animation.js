import { TweenMax } from 'gsap';

const duration = 0.5;

export default {
  show(target) {
    return TweenMax
      .staggerFrom(target, duration, {
        opacity: 0,
        y: 100,
        ease: Elastic.easeOut.config(0.25, 1),
        delay: 1
      }, 0.075);
  },
  showList(target) {
    return null;
    return TweenMax
      .staggerFrom(target, duration, {
        opacity: 0,
        x: 10,
        ease: Elastic.easeOut.config(0.25, 1),
        delay: 1,
      }, 0.1);
  }
}