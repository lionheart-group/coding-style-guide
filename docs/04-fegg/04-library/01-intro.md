---
title: About Extension libraries
slug: /fegg/library
---

Fegg's goal is lightweight and less typing, so Core class has the only minimum required functions. That's why, if you want additional functions, you can install extension libraries.

## Extension Libraries

* [Validation](/docs/fegg/library/validation)
  * Providing some functions for validation
* [Database](/docs/fegg/library/database)
  * Providing necessary functions for using database
* Model
  * Extended Database Library for LH project
* File
  * Providing some functions for managing files/directories
* Upload
  * Providing some functions for uploading/validating files
* Mail
  * Providing some functions for sending email
* RSS
  * Providing some functions for analyzing RSS document
* Trim
  * Providing some functions for processing image (especially image crop)

## External Libraries

* [Spyc](https://github.com/mustangostang/spyc)
  * YAML document loader
* [JSON](https://github.com/pear/Services_JSON)
  * Json document loader
  * Mainly You don't need to use this, you can just use `json_encode` and `json_decode`