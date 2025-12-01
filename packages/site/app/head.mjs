import {getStyles} from '@enhance/arc-plugin-styles';

export default function Head() {
const styles = getStyles.all();

return `
<!doctype html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
<meta charset="UTF-8"/>
<title>Sanity Christmas 2025</title>
<link rel="icon" href="/_public/favicon.svg" />
${styles.link}
<link rel="stylesheet" href="/_public/styles.css"/>
</head>
`;
}
