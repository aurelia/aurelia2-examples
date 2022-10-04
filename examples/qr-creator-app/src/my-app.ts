import QRCode from "qrcode";

export class MyApp {
  private url = "";
  private image = "";
  private qrcodeImage: HTMLCanvasElement;

  private formSubmit() {
    this.generate();
  }

  private async generate() {
    if (this.url.trim() !== "") {
      this.image = await generateQR(this.url);
    }
  }
}

const generateQR = async text => {
  try {
    return await QRCode.toDataURL(text, {
      type: 'image/webp',
      quality: 1
    });
  } catch (err) {
    console.error(err);
  }
}