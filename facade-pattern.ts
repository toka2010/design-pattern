class Amp {
    on() {
      console.log("amp on ");
    }
  
    off() {
      console.log("amp off ");
    }
  }
  
  class CD {
    on() {
      console.log("cd on ");
    }
    off() {
      console.log("cd off ");
    }
  }
  
  class DVD {
    on() {
      console.log("DVD  on ");
    }
    off() {
      console.log("DVD  off ");
    }
  }
  
  class Projector {
    on() {
      console.log("Projector  on ");
    }
    off() {
      console.log("Projector  off ");
    }
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  class HomeTheaterFacade {
    amp: Amp;
    cd: CD;
    dvd: DVD;
    projector: Projector;
  
    constructor(amp: Amp, cd: CD, dvd: DVD, projector: Projector) {
      this.amp = amp;
      this.cd = cd;
      this.dvd = dvd;
      this.projector = projector;
    }
  
    watchMovie() {
      this.amp.on();
      this.cd.on();
      this.dvd.on();
      this.projector.on();
    }
  
    endMovie() {
      this.amp.off();
      this.cd.off();
      this.dvd.off();
      this.projector.off();
    }
  }
  ///......................................................................
  
  const homeTheaterFacade = new HomeTheaterFacade(
    new Amp(),
    new CD(),
    new DVD(),
    new Projector()
  );
  homeTheaterFacade.watchMovie();
  homeTheaterFacade.endMovie();
  // ......................................................................
  
  // The Facade Pattern
  // The Facade Pattern provides a uniﬁed interface to a
  // set of interfaces in a subsytem. Facade deﬁnes a higher-
  // level interface that makes the subsystem easier to use