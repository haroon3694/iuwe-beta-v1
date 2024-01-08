import { atom } from "recoil";

const sidebarToggleAtom = atom({
    key: 'sidebarToggleAtom',
    default: true,
});

export default sidebarToggleAtom;