---
layout: default
lang: en
permalink: /
---

{% assign page_i18n = site.data.i18n[page.lang] %}
{% include hero.html t=page_i18n %}
