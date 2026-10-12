-- 1. 카테고리 (대분류)
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. 지역/구역
CREATE TABLE IF NOT EXISTS locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. 개별 센터 및 현장
CREATE TABLE IF NOT EXISTS centers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  code TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. 세부 공정
CREATE TABLE IF NOT EXISTS processes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  center_id UUID NOT NULL REFERENCES centers(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  base_wage INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. 익명 게시글 & 실시간 단가 찌라시
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  center_id UUID REFERENCES centers(id) ON DELETE SET NULL,
  category TEXT NOT NULL DEFAULT 'free', -- 'wage' (단가/인센티브) 또는 'free' (익명수다)
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 초기 기초 샘플 데이터 삽입
INSERT INTO categories (name, slug) VALUES 
  ('쿠팡물류', 'coupang'), 
  ('마켓컬리', 'kurly'), 
  ('조선소', 'shipyard'),
  ('반도체/건설', 'semicon') 
ON CONFLICT (slug) DO NOTHING;