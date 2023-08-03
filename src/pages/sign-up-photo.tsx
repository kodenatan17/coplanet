import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { setSignUp } from "../../services/auth";
import { getMenuCategory } from "../../services/player";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });
  const router = useRouter();

  const getMenuCategoryAPI = useCallback(async () => {
    const data = await getMenuCategory();
    setCategories(data);
    setFavorite(data[0]._id);
  }, []);
  useEffect(() => {
    getMenuCategoryAPI();
  }, []);
  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalForm(JSON.parse(getLocalForm!));
  }, []);

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm!);
    const data = new FormData();

    data.append("image", image);
    data.append("email", form.email);
    data.append("name", form.name);
    data.append("password", form.password);
    data.append("username", form.name);
    data.append("phoneNumber", "08123456789");
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await setSignUp(data);
    if (result.error) {
      toast.error(result.message);
    } else {
      toast.success("Register Berhasil");
      router.push("/sign-up-success");
      localStorage.removeItem("user-form");
    }
  };
  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          className="image-upload"
                          alt="upload"
                        />
                      ) : (
                        <Image
                          src="/icon/upload.svg"
                          width={120}
                          height={120}
                          alt="upload"
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
                          return setImage(image);
                        }
                      }}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {localForm.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {localForm.email}
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    value={favorite}
                    onChange={(event) => setFavorite(event.target.value)}
                  >
                    {categories.map((e) => {
                      return (
                        <option key={e._id} value={e._id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  type="button"
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  onClick={onSubmit}
                  role="button"
                >
                  Create My Account
                </button>
                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href="#"
                  role="button"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
