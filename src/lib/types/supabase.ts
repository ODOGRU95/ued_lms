import { UUID } from "crypto";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
          // the data expected from .select()
          id: string;
          fullname: string | null;
          nickname: string | null;
          birthday: string | null;
          school: string | null;
          grade: string | null;
          email: string;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          // the data to be passed to .insert()
          id: string;
          fullname?: string | null;
          nickname: string | null;
          birthday: string | null;
          school: string | null;
          grade: string | null;
          email: string;
          avatar_url: string | null;
          created_at?: string; // `not null` columns with no default must be supplied
        };
        Update: {
          // the data to be passed to .update()
          id: string;
          fullname?: string | null;
          nickname?: string | null;
          birthday?: string | null;
          school?: string | null;
          grade?: string | null;
          email?: string;
          avatar_url?: string;
          created_at?: string; // `not null` columns with no default must be supplied
        };
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
  };
}
