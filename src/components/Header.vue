<template>
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175459186-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-175459186-1');
  </script>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="icon" href="favicon.ico">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="bulma.min.css">
  <link rel="stylesheet" href="style.css">
</head>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>
