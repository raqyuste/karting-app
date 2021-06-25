export const INTEVAL_SCREEN_TIME = 10000;

export const enterFullScreen = () => {
  !document.fullscreenElement && document.firstElementChild.requestFullscreen();
};

export const exitFullScreen = () => {
  document.fullscreenElement && document.exitFullscreen();
};
