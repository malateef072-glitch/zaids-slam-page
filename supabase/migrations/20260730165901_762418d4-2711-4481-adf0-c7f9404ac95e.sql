CREATE TYPE public.drill_category AS ENUM ('Dribbling','Shooting','Passing','Defense','Footwork','Conditioning');
CREATE TYPE public.drill_difficulty AS ENUM ('Beginner','Intermediate','Advanced');

CREATE TABLE public.drills (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  category public.drill_category NOT NULL,
  difficulty public.drill_difficulty NOT NULL,
  duration_seconds integer NOT NULL DEFAULT 60,
  video_url text NOT NULL,
  thumbnail_url text NOT NULL,
  steps jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.drills TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.drills TO authenticated;
GRANT ALL ON public.drills TO service_role;

ALTER TABLE public.drills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Drills are viewable by everyone" ON public.drills FOR SELECT USING (true);
CREATE POLICY "Owners can insert drills" ON public.drills FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'owner'));
CREATE POLICY "Owners can update drills" ON public.drills FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'owner'));
CREATE POLICY "Owners can delete drills" ON public.drills FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'owner'));

CREATE TABLE public.user_progress (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  drill_id uuid NOT NULL REFERENCES public.drills(id) ON DELETE CASCADE,
  completed_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, drill_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_progress TO authenticated;
GRANT ALL ON public.user_progress TO service_role;

ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progress" ON public.user_progress FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(),'owner'));
CREATE POLICY "Users can insert their own progress" ON public.user_progress FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own progress" ON public.user_progress FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own progress" ON public.user_progress FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_drills_updated_at BEFORE UPDATE ON public.drills FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_user_progress_updated_at BEFORE UPDATE ON public.user_progress FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.drills (slug, title, description, category, difficulty, duration_seconds, video_url, thumbnail_url, steps) VALUES
('pound-dribble','Pound Dribble Series','Build hand strength and a low, controlled handle with hard pound dribbles.','Dribbling','Beginner',45,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=70','[{"order":1,"title":"Athletic stance","description":"Feet shoulder width, knees bent, chest up, eyes forward.","imageUrl":"https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&q=60"},{"order":2,"title":"Pound hard","description":"Slam the ball waist high with fingertips, not the palm.","imageUrl":null},{"order":3,"title":"Switch hands","description":"20 reps right, 20 left, then alternate every rep.","imageUrl":null}]'::jsonb),
('crossover-cones','Crossover Cone Weave','Change direction fast and low through a 5-cone weave.','Dribbling','Intermediate',60,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4','https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&q=70','[{"order":1,"title":"Set the cones","description":"Five cones, three feet apart in a straight line.","imageUrl":null},{"order":2,"title":"Attack the cone","description":"Push the ball past the cone before you cross over.","imageUrl":null},{"order":3,"title":"Cross low","description":"Keep the crossover below the knee and stay wide.","imageUrl":null},{"order":4,"title":"Finish","description":"Weave down and back twice at game speed.","imageUrl":null}]'::jsonb),
('two-ball-handle','Two-Ball Control Dribble','Two balls, four patterns. Elite handle and coordination work.','Dribbling','Advanced',75,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4','https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=70','[{"order":1,"title":"Same-time dribble","description":"Both balls hit the floor together, 20 reps.","imageUrl":null},{"order":2,"title":"Alternating","description":"One up, one down. Stay rhythmic for 20 reps.","imageUrl":null},{"order":3,"title":"High-low","description":"One ball at knee, one at hip. Swap every 10 reps.","imageUrl":null}]'::jsonb),
('form-shooting','Form Shooting Close-Range','Perfect release mechanics from five feet before you step back.','Shooting','Beginner',60,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4','https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=70','[{"order":1,"title":"Foot positioning","description":"Toes to the rim, feet shoulder width, weight balanced.","imageUrl":"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=60"},{"order":2,"title":"Ball grip","description":"Shooting hand under the ball, guide hand on the side, gap under the palm.","imageUrl":null},{"order":3,"title":"Release motion","description":"Elbow in, snap the wrist, hold the follow-through until it drops.","imageUrl":null},{"order":4,"title":"Make 25","description":"Five makes from five spots inside the paint.","imageUrl":null}]'::jsonb),
('catch-and-shoot','Catch-and-Shoot Reps','Wing catch, quick feet, one-motion release off the pass.','Shooting','Intermediate',70,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4','https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800&q=70','[{"order":1,"title":"Show your hands","description":"Target hands up before the pass arrives.","imageUrl":null},{"order":2,"title":"Hop into it","description":"Land both feet as the ball hits your hands.","imageUrl":null},{"order":3,"title":"Shoot on the rise","description":"No dip, no delay. Same release every time.","imageUrl":null}]'::jsonb),
('step-back-three','Step-Back Three','Create space off the bounce and shoot balanced from deep.','Shooting','Advanced',80,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=800&q=70','[{"order":1,"title":"Sell the drive","description":"Two hard attack steps to move the defender.","imageUrl":null},{"order":2,"title":"Push off","description":"Plant the inside foot and push back, not sideways.","imageUrl":null},{"order":3,"title":"Land square","description":"Feet parallel, shoulders to rim, then release.","imageUrl":null}]'::jsonb),
('chest-pass-wall','Wall Chest Pass','Sharpen pass accuracy and hand speed against a wall.','Passing','Beginner',40,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4','https://images.unsplash.com/photo-1567571599918-6d8b18e0e58f?w=800&q=70','[{"order":1,"title":"Pick a target","description":"Tape a spot on the wall at chest height, stand 8 feet back.","imageUrl":null},{"order":2,"title":"Step and push","description":"Step into the pass, thumbs down on release.","imageUrl":null},{"order":3,"title":"50 reps","description":"Fast hands, soft catch, no bobbles.","imageUrl":null}]'::jsonb),
('pocket-pass','Pick-and-Roll Pocket Pass','Deliver the low pocket pass out of a live ball screen.','Passing','Intermediate',65,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4','https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&q=70','[{"order":1,"title":"Set up the screen","description":"Ride the defender''s hip off the screen.","imageUrl":null},{"order":2,"title":"Live dribble","description":"Keep the ball alive and low in the pocket.","imageUrl":null},{"order":3,"title":"One-hand push","description":"Fire it under the help defender''s arms to the roller.","imageUrl":null}]'::jsonb),
('defensive-slides','Lane Defensive Slides','Lateral quickness and a low stance for on-ball defense.','Defense','Beginner',50,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4','https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=70','[{"order":1,"title":"Get low","description":"Butt down, hands active, chest tall.","imageUrl":null},{"order":2,"title":"Push and pull","description":"Push off the trail foot, never cross your feet.","imageUrl":null},{"order":3,"title":"Slide the lane","description":"Four widths of the lane, three sets.","imageUrl":null}]'::jsonb),
('closeout-contest','Closeout and Contest','Sprint, chop, contest without fouling.','Defense','Intermediate',60,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4','https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=70','[{"order":1,"title":"Sprint the gap","description":"Full speed for the first two thirds of the distance.","imageUrl":null},{"order":2,"title":"Chop your feet","description":"Short choppy steps, high hand, stay balanced.","imageUrl":null},{"order":3,"title":"Contest straight up","description":"Vertical hand, no lean, then box out.","imageUrl":null}]'::jsonb),
('jump-stop-pivot','Jump Stop and Pivot','Master balance, pivots, and legal footwork.','Footwork','Beginner',45,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=70','[{"order":1,"title":"Two-foot stop","description":"Land both feet at once off one dribble.","imageUrl":null},{"order":2,"title":"Front pivot","description":"Pivot on the ball of one foot, keep the heel off the floor.","imageUrl":null},{"order":3,"title":"Reverse pivot","description":"Same foot, opposite direction. 10 each side.","imageUrl":null}]'::jsonb),
('suicide-conditioning','Court Sprints Conditioning','Game-shape lung work with line-to-line sprints.','Conditioning','Advanced',90,'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4','https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=70','[{"order":1,"title":"Set the lines","description":"Free throw, half court, far free throw, baseline.","imageUrl":null},{"order":2,"title":"Touch every line","description":"Hand down on each line, sprint back to the start.","imageUrl":null},{"order":3,"title":"Four rounds","description":"Under 33 seconds per round, 45 seconds rest.","imageUrl":null}]'::jsonb);
