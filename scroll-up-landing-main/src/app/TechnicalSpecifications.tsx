import React from "react";
import Image from "next/image";

const TechnicalSpecifications: React.FC = () => {
  return (
    <div className="flex justify-between items-start bg-[#3bb24a] p-10 rounded-xl">
      {/* Technical Specifications Table */}
      <div className="text-white w-1/2">
        <h2 className="text-3xl font-bold mb-6">Teknik Özellikler</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left border-b-2 border-white pb-2">
                Özellikler
              </th>
              <th className="text-left border-b-2 border-white pb-2">Değer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 border-b border-white">Çözünürlük</td>
              <td className="py-2 border-b border-white">256 × 640</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">Pixel Aralığı</td>
              <td className="py-2 border-b border-white">
                1.5 - 1.86 - 2.5 mm
              </td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">
                Optimal İzleme Mesafesi
              </td>
              <td className="py-2 border-b border-white">~2 metre</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">İzleme Açısı</td>
              <td className="py-2 border-b border-white">120</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">Parlaklık</td>
              <td className="py-2 border-b border-white">500 nits</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">Yenileme Hızı</td>
              <td className="py-2 border-b border-white">3840 Hz</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">Tarama</td>
              <td className="py-2 border-b border-white">1/32</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">Çalışma Gerilimi</td>
              <td className="py-2 border-b border-white">220VAC</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">
                Ortalama Güç Tüketimi
              </td>
              <td className="py-2 border-b border-white">260W</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">Ağırlık</td>
              <td className="py-2 border-b border-white">30 kg</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">
                Katlanmış taşıma boyutları
              </td>
              <td className="py-2 border-b border-white">80 × 48.5 × 38 cm</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">Taşınabilirlik</td>
              <td className="py-2 border-b border-white">Evet</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">
                Otomatik Açma/Kapama
              </td>
              <td className="py-2 border-b border-white">Evet</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-white">
                Güç Kablosu Uzunluğu
              </td>
              <td className="py-2 border-b border-white">3 m</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Product Image */}
      <div className="relative w-1/2 h-full flex justify-end">
        <Image
          src="/product-image.png" // Update with your image path
          alt="Product Image"
          width={320}
          height={640}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default TechnicalSpecifications;
