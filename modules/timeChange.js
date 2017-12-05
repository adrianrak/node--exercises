function timeChange(second) {
    if (second > 60 && second < 3600) {
        return (second / 60).toFixed(0) + " min " + (second % 60).toFixed(0) + " sec";
    } else if (second > 3600) {
        return (second / 3600).toFixed(0) + " hours " + ((second % 3600) / 60).toFixed(0) + " min " + (second % 60).toFixed(0) + " sec ";
    }
}

exports.timeChange = timeChange;