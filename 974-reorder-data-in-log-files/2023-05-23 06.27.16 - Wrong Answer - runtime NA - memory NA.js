/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const digitLogs = [];
  const letterLogs = [];

  for (const log of logs) {
    if (isDigitLog(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }

  digitLogs.sort((a, b) => {
    const aNum = a.slice(a.indexOf(" ") + 1);
    const bNum = b.slice(b.indexOf(" ") + 1);

    return aNum - bNum;
  });

  letterLogs.sort((a, b) => {
    const aStr = a.slice(a.indexOf(" ") + 1);
    const bStr = b.slice(b.indexOf(" ") + 1);

    if (aStr === bStr) {
      return a.localeCompare(b);
    } else {
      return aStr.localeCompare(bStr);
    }
  });
  return [...letterLogs, ...digitLogs];
};

const isDigitLog = (log) => {
  if (log.startsWith("dig")) {
    return true;
  }
};

const isLetterLog = (log) => {
  if (log.startsWith("let")) {
    return true;
  }
};