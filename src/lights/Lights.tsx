// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function Lights() {
  return (
    <>
      <directionalLight position={[-2, 3, 2]} intensity={1} />
      <directionalLight position={[2, 3, 2]} intensity={1} />
      <ambientLight intensity={0.5} />
    </>
  );
}
