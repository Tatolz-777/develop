import SaySomething from "./saySomething";

const root:HTMLElement | null = document.getElementById("root");

const saySomething = new SaySomething("Hello World");
saySomething.sayText(root);