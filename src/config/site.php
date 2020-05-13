<?php

return [
    'site' => [
        // Activated menu index
        'menu'        => '0',
        // Index page flag
        'is_index'    => false,
        // og:type
        'type'        => 'article',
        // page title
        'title'       => 'タイトル',
        // meta description
        'description' => '',
        // meta keywords
        'keywords'    => '',
        // site name
        'name'        => 'タイトル',
        // ogp:image
        'image'       => null,
        // Twitter account
        'twitter'     => null,
        // Version number ( for Cached data )
        'version'     => '0.0.1',
        // Responsive Break Point
        'picture'     => array(
            'sp' => '(max-width: 640px)',
            'pc' => '(min-width: 641px)',
        ),

        'nav' => [
            [
                'label' => 'Home',
                'link' => '/',
                'children' => [],
            ], [
                'label' => 'CSS methodologies',
                'link' => '/methodologies/',
                'children' => [
                    [
                        'label' => 'FLOCSS',
                        'link' => '/methodologies/#flocss',
                        'children' => [],
                    ], [
                        'label' => 'Foundation',
                        'link' => '/methodologies/#foundation',
                        'children' => [],
                    ], [
                        'label' => 'Layout',
                        'link' => '/methodologies/#layout',
                        'children' => [],
                    ], [
                        'label' => 'Object',
                        'link' => '/methodologies/#object',
                        'children' => [
                            [
                                'label' => 'Component',
                                'link' => '/methodologies/#object-component',
                                'children' => [],
                            ], [
                                'label' => 'Project',
                                'link' => '/methodologies/#object-project',
                                'children' => [],
                            ], [
                                'label' => 'Utility',
                                'link' => '/methodologies/#object-utility',
                                'children' => [],
                            ],
                        ],
                    ], [
                        'label' => 'View',
                        'link' => '/methodologies/#view',
                        'children' => [],
                    ],
                ],
            ]
        ]
    ]
];
