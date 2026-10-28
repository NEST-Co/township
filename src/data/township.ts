export const site = {
  name: 'Fernhollow Township',
  phone: '(555) 010-0142',
  email: 'office@fernhollow.example',
  address: '100 Main Street, Fernhollow',
  hours: 'Monday to Friday, 8:30 a.m. to 4:30 p.m.',
};
export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/fire-ems', label: 'Fire & EMS' },
  { href: '/meetings', label: 'Meetings' },
  { href: '/documents', label: 'Documents' },
  { href: '/notices', label: 'Notices' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
export const tasks = [
  { href: '/services#zoning', label: 'Apply for a zoning permit' },
  { href: '/services#records', label: 'Request public records' },
  { href: '/services#roads', label: 'Report a road problem' },
  { href: '/meetings', label: 'See meeting dates and agendas' },
  { href: '/services#cemetery', label: 'Cemetery information' },
  { href: '/contact', label: 'Contact the township office' },
];
export const meetings = [
  { date: '2026-11-10', body: 'Board of Trustees', time: '7:00 p.m.', place: 'Township Hall', agenda: true, minutes: false },
  { date: '2026-11-17', body: 'Zoning Commission', time: '6:30 p.m.', place: 'Township Hall', agenda: true, minutes: false },
  { date: '2026-10-13', body: 'Board of Trustees', time: '7:00 p.m.', place: 'Township Hall', agenda: true, minutes: true },
  { date: '2026-09-08', body: 'Board of Trustees', time: '7:00 p.m.', place: 'Township Hall', agenda: true, minutes: true },
];
export const notices = [
  { date: '2026-10-20', title: 'Leaf pickup begins November 2', body: 'Place leaves at the curb, not in the road. Bagged leaves are not required.' },
  { date: '2026-10-15', title: 'Road closure: Cedar Lane culvert', body: 'Cedar Lane is closed between Mill Road and Oak Street until further notice. Follow posted detours.' },
  { date: '2026-10-01', title: 'Budget hearing schedule posted', body: 'The proposed budget is available in the Documents section.' },
];
export const documents = [
  { title: 'Proposed 2027 budget', type: 'Budget', format: 'PDF', size: '1 KB', date: '2026-10-01', file: '/docs/budget-2027.pdf' },
  { title: 'Zoning resolution (current)', type: 'Zoning', format: 'PDF', size: '1 KB', date: '2026-06-12', file: '/docs/zoning-resolution.pdf' },
  { title: 'Zoning permit application', type: 'Forms', format: 'PDF', size: '1 KB', date: '2026-03-02', file: '/docs/zoning-permit-application.pdf' },
  { title: 'Public records request form', type: 'Forms', format: 'PDF', size: '1 KB', date: '2026-03-02', file: '/docs/records-request-form.pdf' },
  { title: 'Board of Trustees minutes, October 2026', type: 'Minutes', format: 'PDF', size: '1 KB', date: '2026-10-20', file: '/docs/minutes-2026-10.pdf' },
  { title: 'Board of Trustees minutes, September 2026', type: 'Minutes', format: 'PDF', size: '1 KB', date: '2026-09-15', file: '/docs/minutes-2026-09.pdf' },
];
export const officials = [
  { name: 'Dana Whitfield', role: 'Trustee, Chair' },
  { name: 'Marcus Oyelaran', role: 'Trustee' },
  { name: 'Priya Lindqvist', role: 'Trustee' },
  { name: 'Tom Raskin', role: 'Fiscal Officer' },
  { name: 'Elena Brandt', role: 'Zoning Inspector' },
  { name: 'Chief Sam Ortega', role: 'Fire & EMS Chief' },
];
export const events = [
  { date: '2026-11-02', title: 'Leaf pickup begins', place: 'Curbside, all roads' },
  { date: '2026-11-07', title: 'Fire department open house', place: 'Station 1, 40 Station Road' },
  { date: '2026-11-21', title: 'Household hazardous waste drop-off', place: 'Township garage' },
];
export const faq = [
  { q: 'Do I need a permit to build a fence?', a: 'Fences over four feet tall, or any fence near a road, need a zoning permit. Call the zoning inspector if you are not sure.' },
  { q: 'How do I get a copy of meeting minutes?', a: 'Approved minutes are on the Documents page. Minutes are posted after the trustees approve them at the next meeting.' },
  { q: 'Who plows my road?', a: 'The township plows township roads. County and state roads are plowed by those agencies. The office can tell you which applies to your address.' },
  { q: 'Can I speak at a meeting?', a: 'Yes. Public comment is held at the start of every Board of Trustees meeting. You do not need to sign up in advance.' },
  { q: 'How do I pay a zoning fee?', a: 'Pay at the office by check or cash. Card payments are not set up in this concept.' },
];
export const fmtDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
export const dateParts = (iso: string) => {
  const d = new Date(iso + 'T12:00:00');
  return { m: d.toLocaleDateString('en-US', { month: 'short' }), d: String(d.getDate()) };
};
export const initials = (name: string) => name.replace(/^(Chief|Dr\.?)\s+/, '').split(' ').map((p) => p[0]).slice(0, 2).join('');
