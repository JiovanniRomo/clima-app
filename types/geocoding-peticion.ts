export interface ReqResponse {
    type:        string;
    query:       string[];
    features:    Features[];
    attribution: string;
}

export interface Features {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    ReqResponse;
    text_es:       string;
    language_es:   Language;
    place_name_es: string;
    text:          string;
    language:      Language;
    place_name:    string;
    bbox:          number[];
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

interface Context {
    id:          string;
    wikidata:    string;
    short_code?: string;
    text_es:     string;
    language_es: Language;
    text:        string;
    language:    Language;
}


interface Geometry {
    type:        string;
    coordinates: number[];
}

enum Language {
    Es = "es",
}
