import React from "react";
import { useState } from "react";

function Avatars({ currentAvatar, onSave, onCancel }) {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);
  const avatarOptions = [
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1727435366~exp=1727435966~hmac=feaa25b0c261a180a0e638b048958fdc1f174ad75cd4c83cf34d3f1da437f1a8",
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671161.jpg?w=740&t=st=1727435387~exp=1727435987~hmac=9a35491931112d492975652054b8cca8d03d3d2de0f1a521cf595771bce0fae4",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611756.jpg?w=740&t=st=1727436029~exp=1727436629~hmac=5a420934f117bc2eed208ba5dee41930f5f73b74df3153acd1379c2fc4239d5b",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611734.jpg?w=740&t=st=1727436048~exp=1727436648~hmac=313b4d74620b9dc032e58fdce27e98a456a331d2a74f9abef6e19118cf5cedcb",
    "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?t=st=1727435566~exp=1727439166~hmac=884d5516b56eb62247f5ebb2f2493baaae9e377ae3a9e7013038b77e903d341c&w=740",
    "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100221.jpg?t=st=1727435758~exp=1727439358~hmac=afee62dcb1845e0f0c7e944fa1cfb0fab7f3fab45aab52f0be5bdf1101aaa223&w=740",
    "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100223.jpg?t=st=1727435780~exp=1727439380~hmac=643c6fcf366945c233c3a83fdbd8bdc9305b1771588047e1d34c6497cd6b864c&w=740",
    "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100217.jpg?t=st=1727435840~exp=1727439440~hmac=6fef12cb18134649d122419ef04fcc408dedd1eb74b367db8be11b01359109e5&w=740",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?w=740&t=st=1727435960~exp=1727436560~hmac=442e64b17b0186973f450c7f0588c2ec19a8ecc0a8a80c1b78eec3d666e2f843",
    "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=740"
  ];

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };
  return (
    <div className="absolute glass-effect p-6 w-[600px] h-[600px] top-10">
      <h2 className="text-center text-xl font-bold py-2">
        Choose your Profile
      </h2>
      <hr className="bg-slate-500  w-full h-[1.5px]" />
      <div className="flex flex-wrap py-4 h-[460px] overflow-y-scroll gap-3 items-center justify-center">
        {avatarOptions.map((avatar) => (
          <div
            key={avatar}
            className={`relative w-[130px] h-[130px] border shadow-sm hover:scale-110 transition-all duration-200 rounded-lg object-contain ${
              selectedAvatar === avatar ? "ring-4 ring-green-500" : ""
            }`}
            onClick={() => handleAvatarClick(avatar)}
          >
            <img
              src={avatar}
              alt="avatar"
              className="w-[130px] h-[130px] rounded-lg object-contain"
            />
            {selectedAvatar === avatar && (
              <div className="absolute top-0 right-0 m-1 p-1 w-fit bg-green-500 rounded-full text-white">
                ✔
              </div>
            )}
          </div>
        ))}
      </div>

      <hr className="bg-slate-500  w-full h-[1.5px]" />
      <div className="px-14 Buttons py-4 flex flex-row items-center justify-between">
        <button
          onClick={() => onSave(selectedAvatar)}
          className="bg-slate-200 px-4 rounded-md text-sm py-2"
        >
          Save Changes
        </button>
        <button
          onClick={() => onCancel()}
          className="bg-slate-200 flex flex-row items-center justify-center px-4 rounded-md text-sm py-2"
        >
          Close <box-icon name="x"></box-icon>
        </button>
      </div>
    </div>
  );
}

export default Avatars;
