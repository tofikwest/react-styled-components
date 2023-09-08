import AboutImg from "../app/assets/about/about-image.svg";
export const data = [
  {
    id: 1,
    img: AboutImg,
    title: "Long-term partnership 1",
    text: `Often, two minds are greater than one. That is true in both personal
      life and in business. Any business that hasn't formally filed as a
      corporate entity (such as a corporation or limited liability
      company) and that has two or more individuals working together is a
      common law partnership. Partnerships are governed by state
      partnership laws and by contracts known as partnership agreements.
      `,
  },
  {
    id: 2,
    img: AboutImg,
    title: "Long-term partnership 2",
    text: `Often, two minds are greater than one. That is true in both personal
            life and in business. Any business that hasn't formally filed as a
            corporate entity (such as a corporation or limited liability
            company) and that has two or more individuals working together is a
            common law partnership. Partnerships are governed by state
            partnership laws and by contracts known as partnership agreements.
            Long-term partnerships present several issues that should be
            addressed in the partnership agreement.
      `,
  },
  {
    id: 3,
    img: AboutImg,
    title: "Long-term partnership 3",
    text: "Often, two minds are greater than one. That is true in both personal life and in business. Any business that hasn't formally filed as a corporate entity (such as a corporation or limited liability company) and that has two or more individuals working together is a common law partnership. Partnerships are governed by state partnership laws and by contracts known as partnership agreements. Long-term partnerships present several issues that should be addressed in the partnership agreement.",
  },
];
export const acardionContentF = (page = 1) => {
  return data[page - 1];
};
