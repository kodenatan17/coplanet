import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Input from "../../../components/atoms/Input";
import Sidebar from "../../../components/organisms/Sidebar";
import { UserTypes } from "../../../services/data-types";
import { updateProfile } from "../../../services/member";

export default function EditProfile() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    avatar: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = window.atob(token ?? "");
      const userPayload: UserTypes = jwtDecode(jwtToken);
      setUser(userPayload);
    }
  }, []);
  const onSubmit = async () => {
    const data = new FormData();
    data.append("image", user.avatar);
    data.append("name", user.name);
    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="icon upload"
                        width={90}
                        height={90}
                        style={{ borderRadius: "100%" }}
                      />
                    ) : (
                      <img
                        src={user.avatar}
                        alt="icon upload"
                        width={90}
                        height={90}
                        style={{ borderRadius: "100%" }}
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const files = event.target.files;
                      if (files && files.length > 0) {
                        const image = files[0];
                        setImagePreview(URL.createObjectURL(image));
                        return setUser({
                          ...user,
                          avatar: image,
                        });
                      }
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUser({ ...user, name: event.target.value })
                  }
                />
              </div>
              <div className="pt-30">
                <Input label="Email Address" disabled value={user.email} />
              </div>
              {/* <div className="pt-30">
                <Input label="Phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
