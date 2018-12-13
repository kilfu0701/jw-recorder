const EventType = {
  WindowResize: 'windowResize',
  MouseMove: 'mouseMove',
  MouseDown: 'mouseDown',
  MouseUp: 'mouseUp',
};

class EventTracker {
  constructor() {
    window.console.log('new event');
    this.data = {
      name: 'tracker',
      startAt: (new Date()).getTime(),
      endAt: null,
      events: [],
    };
  }

  pushEvent(evtType, e) {
    let data = {
      type: evtType,
      timestamp: (new Date()).getTime(),
    };

    switch (evtType) {
      case EventType.MouseMove:
        data.posX = e.clientX;
        data.posY = e.clientY;
        this.data.events.push(data);
        break;

      case EventType.MouseDown:
      case EventType.MouseUp:
        this.data.events.push(data);
        break

      case EventType.WindowResize:
        data.width = e.target.document.body.clientWidth;
        data.height = e.target.document.body.clientHeight;
        this.data.events.push(data);
        break;

      default:
        break;
    }
  }

  getCurrentData() {
    return this.data;
  }
}




(function() {
  window.et = new EventTracker();

  window.onmousemove = (e) => {
    et.pushEvent(EventType.MouseMove, e);
  };

  window.onmousedown = (e) => {
    et.pushEvent(EventType.MouseDown, e);
  };

  window.onmouseup = (e) => {
    et.pushEvent(EventType.MouseUp, e);
  };

  window.onresize = (e) => {
    et.pushEvent(EventType.WindowResize, e);
  };

  document.addEventListener('load', () => {
  });

  //window.setTimeout(() => { window.console.log(et.getCurrentData()) }, 5000);

})();
