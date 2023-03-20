//  proxy pattern : Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object.
//  A proxy controls access to the original object, allowing you to perform something either
//   before or after the request gets through to the original object.

class Vedio {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export interface VideoDownloader {
  getVideo(name: string): Vedio;
}

export class RealVedioDownloader implements VideoDownloader {
  getVideo(name: string) {
    return new Vedio(name);
  }
}

export class ProxyVedioDownloader implements VideoDownloader {
  vedioCashe: Map<string, Vedio> = new Map<string, Vedio>();
  videoDownloader: VideoDownloader = new RealVedioDownloader();

  getVideo(name: string): Vedio {
    if (!this.vedioCashe.get(name)) {
      this.vedioCashe.set(name, this.videoDownloader.getVideo(name));
    }
    return this.vedioCashe.get(name) as Vedio;
  }
}

const videoDownloader = new ProxyVedioDownloader();
videoDownloader.getVideo("movie1");
videoDownloader.getVideo("movie2");
videoDownloader.getVideo("movie1");

// this example prevent download the video was downloaded  before

///proxy pattern allows us to controll  access to the object
