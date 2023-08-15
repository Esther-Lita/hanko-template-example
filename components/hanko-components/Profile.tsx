import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoProfile() {
  useEffect(() => {
    // register the component
    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script
    register(hankoApi ?? "", { shadow: false, injectStyles: false }).catch(
      (error) => {
        // handle error
      }
    );
  }, []);

  return <hanko-profile />;
}
