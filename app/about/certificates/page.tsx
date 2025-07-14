import CertificateContact from "../../components/CertificateContact/CertificateContact";
import CertificateMatter from "../../components/CertificateMatter/CertificateMatter"
import CertificateImages from "../../components/CertificateImages/CertificateImages"

export default function Page() {
  return (
    <div>
      <CertificateContact></CertificateContact>
      <CertificateMatter></CertificateMatter>
      <CertificateImages></CertificateImages>
    </div>
  );
}
