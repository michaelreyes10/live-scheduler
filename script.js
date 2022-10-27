function showTime() {
    const selectTheTime = document.getElementById("currentDay")
    let currenDate = moment().format('MMMM Do YYYY, h:mm:ss A');
    selectTheTime.innerHTML = currenDate

};


function liveEffect() {
    let theHrNow = moment().hour();
    $(".time-block").each(function () {
        const hourBlocks = parseInt($(this).attr("id"))
        if (theHrNow > hourBlocks) {
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        }
        else if (theHrNow === hourBlocks) {
            $(this).removeClass("past")
            $(this).addClass("present")
            $(this).removeClass("future")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
};


function lockItIn() {
  $(".saveBtn").on("click", function() {
    theTime = $(this).parent($(".row time-block")).attr("id")
    theText = $(this).siblings(".description").val()
    localStorage.setItem(theTime, theText)
  })
};


function createSched() {
$("9").val(localStorage.getItem("hr9"))
$("10").val(localStorage.getItem("hr10"))
$("11").val(localStorage.getItem("hr11"))
$("12").val(localStorage.getItem("hr12"))
$("13").val(localStorage.getItem("hr13"))
$("14").val(localStorage.getItem("hr14"))
$("15").val(localStorage.getItem("hr15"))
$("16").val(localStorage.getItem("hr16"))
$("17").val(localStorage.getItem("hr17"))
};

showTime()
liveEffect()
lockItIn();
createSched();