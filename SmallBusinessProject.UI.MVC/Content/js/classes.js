const skillsCourses = document.getElementById("sc");
skillsCourses.addEventListener("click", (event) => {
    document.getElementById("table__all").style.display = "none";
    document.getElementById("table__skills").style.display = "block";

    document.getElementById("table__field").style.display = "none";
    document.getElementById("table__expedition").style.display = "none";
    document.getElementById("table__navigation").style.display = "none";
    document.getElementById("table__hunter").style.display = "none";
    document.getElementById("table__wilderness").style.display = "none";

    document.getElementById("table__skills").scrollIntoView({
        behavior: "smooth"
    });

});

const skillsCourses1 = document.getElementById("cf");
skillsCourses1.addEventListener("click", (event) => {
    document.getElementById("table__all").style.display = "none";
    document.getElementById("table__field").style.display = "block";

    document.getElementById("table__skills").style.display = "none";
    document.getElementById("table__expedition").style.display = "none";
    document.getElementById("table__navigation").style.display = "none";
    document.getElementById("table__hunter").style.display = "none";
    document.getElementById("table__wilderness").style.display = "none";

    document.getElementById("table__field").scrollIntoView({
        behavior: "smooth"
    });

});

const skillsCourses2 = document.getElementById("ep");
skillsCourses2.addEventListener("click", (event) => {
    document.getElementById("table__all").style.display = "none";
    document.getElementById("table__expedition").style.display = "block";

    document.getElementById("table__skills").style.display = "none";
    document.getElementById("table__field").style.display = "none";
    document.getElementById("table__navigation").style.display = "none";
    document.getElementById("table__hunter").style.display = "none";
    document.getElementById("table__wilderness").style.display = "none";

    document.getElementById("table__expedition").scrollIntoView({
        behavior: "smooth"
    });

});

const skillsCourses3 = document.getElementById("nav");
skillsCourses3.addEventListener("click", (event) => {
    document.getElementById("table__all").style.display = "none";
    document.getElementById("table__navigation").style.display = "block";

    document.getElementById("table__skills").style.display = "none";
    document.getElementById("table__field").style.display = "none";
    document.getElementById("table__expedition").style.display = "none";
    document.getElementById("table__hunter").style.display = "none";
    document.getElementById("table__wilderness").style.display = "none";

    document.getElementById("table__navigation").scrollIntoView({
        behavior: "smooth"
    });

});

const skillsCourses4 = document.getElementById("hg");
skillsCourses4.addEventListener("click", (event) => {
    document.getElementById("table__all").style.display = "none";
    document.getElementById("table__hunter").style.display = "block";

    document.getElementById("table__skills").style.display = "none";
    document.getElementById("table__field").style.display = "none";
    document.getElementById("table__navigation").style.display = "none";
    document.getElementById("table__expedition").style.display = "none";
    document.getElementById("table__wilderness").style.display = "none";

    document.getElementById("table__hunter").scrollIntoView({
        behavior: "smooth"
    });

});

const skillsCourses5 = document.getElementById("wm");
skillsCourses5.addEventListener("click", (event) => {
    document.getElementById("table__all").style.display = "none";
    document.getElementById("table__wilderness").style.display = "block";

    document.getElementById("table__skills").style.display = "none";
    document.getElementById("table__field").style.display = "none";
    document.getElementById("table__navigation").style.display = "none";
    document.getElementById("table__hunter").style.display = "none";
    document.getElementById("table__expedition").style.display = "none";

    document.getElementById("table__wilderness").scrollIntoView({
        behavior: "smooth"
    });

});