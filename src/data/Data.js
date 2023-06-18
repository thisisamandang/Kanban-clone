import pp1 from "../assets/pp1.png";
import pp2 from "../assets/pp2.png";
import pp3 from "../assets/pp3.png";
import pp4 from "../assets/pp4.png";
// import { v4 as uuidv4 } from "uuid";

export const sampleTodo = [
  {
    id: "item-1",
    priority: "Low",
    title: "Brainstorming",
    content: "Brainstorming brings team members' diverse experience into play",
    dp: [pp1, pp2, pp3],
    comments: "12",
    files: "0",
  },
  {
    id: "item-2",
    priority: "High",
    title: "Research",
    content: "User research helps you to create an optimal product for users.",
    dp: [pp3, pp4],
    comments: "10",
    files: "3",
  },
  {
    id: "item-3",
    priority: "High",
    title: "Wireframes",
    content:
      "Low fidelity wireframes include the most basic content and visuals.",
    dp: [pp1, pp2, pp4],
    comments: "12",
    files: "0",
  },
  {
    id: "item-4",
    priority: "Low",
    title: "Coding",
    content: "Brainstorming brings team members' diverse experience into play",
    dp: [pp3],
    comments: "12",
    files: "0",
  },
];

export const sampleProgress = [
  {
    id: "item-5",
    priority: "Low",
    title: "Onboarding Illustrations",
    content: null,
    thumbnailURL:
      "https://s3-alpha-sig.figma.com/img/7360/16e1/66046f272f78e1138e2ad74ea8cc8e58?Expires=1687737600&Signature=Lo~EurrcBu02JP-eJdHydIMrMQSho7lkIegTos62z3rhkXimBfUavPQ10uAvwzYibzySpTJcieNhxd5dFc~Ofa0DouVAzu5CNRPvNKcIMyK~H2AvsDik-JEXmCuDgBIH-hVhU-5MghUacOzc0friv91nMeST4als2sna3~zlHNFNbHFq2sYXq9SXJ-EHnEQD2Y1zvpfp1LMB4SfLBtZfmy2k4Bulzml2XRi4yAWuCaKF7KKs8dDnpxRd0cYzUjBCpbxCir9lmIXelZJQeWiXLD~IRH5-xbGPGx8ghiB4YHg-53sjx~L3mo8u0ThtpLKwgxCGmpsFa2Hwb3~bv73SQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    dp: [pp1, pp3, pp4],
    comments: "14",
    files: "15",
  },
  {
    id: "item-6",
    priority: "Low",
    title: "Onboarding Illustrations",
    content: null,
    thumbnailURL:
      "https://s3-alpha-sig.figma.com/img/e006/c6a0/1653e356a02cfba3753d730d262bdb9f?Expires=1687737600&Signature=RtMFtxcGvEXlax5T5WBbyxH2GBBfHWbfS-YgxMTaojF7Vy0qylw0po-IDw~mTyWGcl9kRB4yCpHuH~MU18vGiumWyBRU18OFHBxLRPwI2l7wCVtZEaimJ9vpXMpEvbDsF6~vifOTpMQ6hNKyvgO8B0QV79yqsDE6D1026GtWNRI8Ki3SdBhXNjcS7gZmP1dFG74r9wQogIqoTn2jdG-MTkr8u-Mq2xAN~BvTVhvlXCKMAlyHWCfL73dySvKBy6G-sChpXTN54PUo82fzJwZECMLUEVZNhJRFv34aGlGwkzX4zs3Ms8i-HUmkKg~OKBEha~1ykNaISuTLPw-10zwIow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    dp: [pp3],
    comments: "9",
    files: "10",
  },
  {
    id: "item-7",
    priority: "Low",
    title: "Onboarding Illustrations",
    content: null,
    thumbnailURL:
      "https://s3-alpha-sig.figma.com/img/72da/5d11/3b90b9d00183dfa3c75107849e1f4759?Expires=1687737600&Signature=JveLiK~A00B6Axja3SaPE62WAUfc9KL~N604jS3IfY7x43PZkb6B0QXQwQ1U16OW1Sl86Az3YYyUsZv40ogQNSH0ZBi84bAjAqTbPg4LmIdhkPpwaGQmO7mHjTgtiYv~chWxBO7aKGaevfLPbQU-aKckjqM47-BJhGVv6oCszyKysl2q3kjaduItRK8q7C1ullP6SI4sJ4vcyaWR0wdUcKGx65qYzj3T~EiSkGkPgPV9AibBUv1FJrkH19Hdamw~YBSupRLcxR62osYmJlqykci3arY5ZzyIdTHFLeY~aPRF~UVe-JO~uVue0FA6PMUXgUwK3zoeS7PZPxW8qAEyBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    dp: [pp3],
    comments: "5",
    files: "7",
  },
];

export const sampleDone = [
  {
    id: "item-8",
    priority: "Completed",
    title: "Mobile App Design",
    content: null,
    thumbnailURL:
      "https://s3-alpha-sig.figma.com/img/8426/669a/5b89fa50e47ff55f7fe04ef644f3a410?Expires=1687737600&Signature=KcC5qOEIosjmVZfUAvh-Cthxc15qrN5Xqcbz3aRKbH9FI2EQ3gDGpyeGfgxEnazTzKxBUofyLk~T62G823IYzgY5fQRovG~nOEy1R0MJs59AZpl8r0f00i6RCRzSPliqM5yMTgChtD9yMXYBqDLaDfMOp0GrKUieAz8A1u~fwhCHtJHpzbZT9kcLMCbtULIh42wucodOVD4AClvx2peLpTXljTYB1hLJbKqkO4jKhq4VuU7pmaqrkQY30zRgrkjx00WBp2fdo78mTAVum1WD4vTid1IBz-KgrtfjxhwB9CZ5YBGkoUU~IKL7GBdFYeFia5vqWHzwnCE-sy9C32smLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    dp: [pp3, pp1, pp4],
    comments: "12",
    files: "0",
  },
  {
    id: "item-9",
    priority: "Completed",
    title: "Design System",
    content: "It just needs to adapt the UI from what you did before",
    dp: [pp3],
    comments: "12",
    files: "0",
  },
];

export const sampleColumns = {
  ["column-1"]: {
    name: "To do",
    items: sampleTodo,
  },
  ["column-2"]: {
    name: "In Progress",
    items: sampleProgress,
  },
  ["column-3"]: {
    name: "Done",
    items: sampleDone,
  },
};
