document.addEventListener("DOMContentLoaded", function () {
    const leadership = document.getElementById("leadership");
    const sales = document.getElementById("sales");
    const admin = document.getElementById("admin");
    const instructors = document.getElementById("instructors");

    sales.style.display = "none";
    admin.style.display = "none";
    instructors.style.display = "none";

    const clkLeadership = document.getElementById("clkLeadership");
    clkLeadership.addEventListener("click", () => {
        leadership.style.display = "block";
        sales.style.display = "none";
        admin.style.display = "none";
        instructors.style.display = "none";
    });

    const clkSales = document.getElementById("clkSales");
    clkSales.addEventListener("click", () => {
        leadership.style.display = "none";
        sales.style.display = "block";
        admin.style.display = "none";
        instructors.style.display = "none";
    });

    const clkAdmin = document.getElementById("clkAdmin");
    clkAdmin.addEventListener("click", () => {
        leadership.style.display = "none";
        sales.style.display = "none";
        admin.style.display = "block";
        instructors.style.display = "none";
    });

    const clkInstructors = document.getElementById("clkInstructors");
    clkInstructors.addEventListener("click", () => {
        leadership.style.display = "none";
        sales.style.display = "none";
        admin.style.display = "none";
        instructors.style.display = "block";
    });
});