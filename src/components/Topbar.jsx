import React, { useState } from "react";
import styles from "./Topbar.module.css";
import { FaUser } from "react-icons/fa";
import LoginForm from "./LoginForm";

function Topbar({
  loginDetail,
  onSetloginDetail,
  userIcon = "./Sample_User_Icon.png",
}) {
  const [isOpenloginForm, setIsOpenLoginForm] = useState(false);

  return (
    <div className={styles.topbar}>
      <div className={styles.user}>
        {loginDetail ? (
          <>
            <p>{loginDetail.userName}</p>
            <img src={userIcon} alt="user" />
          </>
        ) : (
          <FaUser
            className={`cta__btn ${styles.user__login}`}
            onClick={() => setIsOpenLoginForm((login) => !login)}
          />
        )}
      </div>

      {isOpenloginForm && (
        <LoginForm
          onSetloginDetail={onSetloginDetail}
          onSetIsOpenLoginForm={setIsOpenLoginForm}
        />
      )}
    </div>
  );
}

export default Topbar;
