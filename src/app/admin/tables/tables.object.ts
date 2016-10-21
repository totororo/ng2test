export class Browser {
    constructor(
        public renderingEngine: string,
        public browser: string,
        public platform: string,
        public engineVersion: number,
        public css: string
    ) { }
}