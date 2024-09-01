import SaySomething from "./saySomething";

const root:HTMLElement | null = document.getElementById("root");

const saySomething = new SaySomething("ようこそ");
saySomething.sayText(root);