import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    Cookies.remove("cookieConsent")
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 10/1440 });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",top:"420px",backgroundColor:"yellow",width:"200px"}}>
        <p>This website uses cookies to improve your experience.</p>
        <button onClick={handleAccept} style={styles.button}>Accept</button>
      </div>
    )
  );
};

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "#000",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    borderRadius:"30px",
   
  },
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius:"30px",
    opacity:"0.4"
    
  },
};

export default CookieConsent;