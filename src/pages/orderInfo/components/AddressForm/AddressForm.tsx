// import { Button, Input } from "@components";
// import { useState } from "react";
// import { useDaumPostcodePopup } from "react-daum-postcode";
// import { mainSectionStyle, zonecodeWrapper } from "./AddressForm.style";

// const scriptUrl =
//   "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

// interface DaumPostcodeData {
//   address: string;
//   addressType: string;
//   bname: string;
//   buildingName: string;
//   zonecode: string;
// }

// interface AddressFormProps {
//   onFormChange: (form: {
//     address: string;
//     addressDetail: string;
//     zonecode: string;
//   }) => void;
//   initialData?: { address: string; addressDetail: string; zonecode: string };
// }

// const AddressForm = ({ onFormChange, initialData }: AddressFormProps) => {
//   const [form, setForm] = useState({
//     address: initialData?.address || "",
//     addressDetail: initialData?.addressDetail || "",
//     zonecode: initialData?.zonecode || "",
//   });

//   const open = useDaumPostcodePopup(scriptUrl);

//   const handleComplete = (data: DaumPostcodeData) => {
//     let fullAddress = data.address;
//     let extraAddress = "";

//     if (data.addressType === "R") {
//       if (data.bname !== "") {
//         extraAddress += data.bname;
//       }
//       if (data.buildingName !== "") {
//         extraAddress +=
//           extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
//       }
//       fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
//     }

//     const updatedForm = {
//       ...form,
//       address: fullAddress,
//       zonecode: data.zonecode,
//     };

//     setForm(updatedForm);
//     onFormChange(updatedForm);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     field: string
//   ) => {
//     const updatedForm = { ...form, [field]: e.target.value };
//     setForm(updatedForm);
//     onFormChange(updatedForm);
//   };

//   const handleClick = () => {
//     open({ onComplete: handleComplete });
//   };

//   return (
//     <section css={mainSectionStyle}>
//       <div css={zonecodeWrapper}>
//         <Input
//           value={form.zonecode}
//           type="text"
//           placeholder="우편번호"
//           inputLabel="우편번호"
//           aria-readonly
//         />
//         <Button variant="fill" onClick={handleClick}>
//           주소 검색
//         </Button>
//       </div>
//       <Input
//         value={form.address}
//         type="text"
//         placeholder="건물, 지번 또는 도로명 검색"
//         inputLabel="주소"
//         aria-readonly
//       />
//       <Input
//         value={form.addressDetail}
//         onChange={(e) => handleChange(e, "addressDetail")}
//         name="addressDetail"
//         type="text"
//         placeholder="상세주소 (예시: 101동 1201호 / 단독주택)"
//       />
//     </section>
//   );
// };

// export default AddressForm;
