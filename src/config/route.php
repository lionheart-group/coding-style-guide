<?php

return [
    // ['GET', '/', 'IndexController', 'home'],
    ['GET', '[**:path]', 'PageController', 'page']
];
