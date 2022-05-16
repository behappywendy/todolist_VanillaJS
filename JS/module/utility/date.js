function dateFormat(date) {
    const regexp = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
    const match = regexp.exec(date);
    return `${match.groups.month}/${match.groups.day}`;
}

export { dateFormat };
