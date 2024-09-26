export var status;
(function (status) {
    status[status["manufactured"] = 0] = "manufactured";
    status[status["assembled"] = 1] = "assembled";
    status[status["shipped"] = 2] = "shipped";
    status[status["deployed"] = 3] = "deployed";
    status[status["detonated"] = 4] = "detonated";
})(status || (status = {}));
