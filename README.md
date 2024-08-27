cv-satysfi
==========

[![Actions Status](https://github.com/MasWag/cv-satysfi/workflows/build/badge.svg)](https://github.com/MasWag/cv-satysfi/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Satyrographos: v0.2.0](https://img.shields.io/badge/Satyrographos-v0.2.0-green.svg)](https://satyrographos-packages.netlify.app/packages/class-cv)


This is a class in [SATySFi](https://github.com/gfngfn/SATySFi) for Curriculum Vitae. The layout is taken from [Wilson Resume/CV](https://github.com/watsonbox/cv_template_2004). The typesetting is not as good as the original and any contribution is welcome.

![an example of CV](./site/example.png)

Dependencies
------------

- [SATySFi](https://github.com/gfngfn/SATySFi)
- [satyrographos](https://github.com/na4zagin3/satyrographos)

How to Build the Example
------------------------

```shell
opam pin add satysfi-class-cv.opam "file://$PWD"
satyrographos install
satysfi ./examples/example.saty
```

