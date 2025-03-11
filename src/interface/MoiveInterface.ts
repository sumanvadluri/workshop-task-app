
export interface MovieI {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface OptionMap {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [id: string]: any | any[] | any[][];
  }
  