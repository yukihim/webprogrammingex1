// scripts.js
const citiesByProvince = {
    Hanoi: ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Long Biên", "Cầu Giấy"],
    HCMC: ["Quận 1", "Quận 2", "Quận 3", "Quận 7", "Thủ Đức"],
    Danang: ["Hải Châu", "Sơn Trà", "Ngũ Hành Sơn", "Cẩm Lệ", "Liên Chiểu"],
    CanTho: ["Ninh Kiều", "Bình Thủy", "Cái Răng", "Ô Môn", "Thốt Nốt"],
    Hue: ["Phú Nhuận", "Hương Thủy", "Hương Trà", "Phong Điền", "Quảng Điền"]
  };
  
  function updateCities() {
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("city");
  
    // Clear the existing cities/districts
    citySelect.innerHTML = '<option value="">Select a city/district</option>';
  
    const selectedProvince = provinceSelect.value;
  
    if (selectedProvince && citiesByProvince[selectedProvince]) {
      // Populate cities/districts based on the selected province
      citiesByProvince[selectedProvince].forEach(function(city) {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }
  }
  