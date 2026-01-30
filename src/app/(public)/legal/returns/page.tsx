'use client';

import { useLanguage } from '@/lib/i18n';
import { Container, Breadcrumbs } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';

export default function ReturnsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <Container size="small">
        <Breadcrumbs
          items={[
            { label: t('footer.legal'), href: '#' },
            { label: t('nav.returns') },
          ]}
          className="mb-6"
        />

        <Card>
          <CardContent className="prose prose-gray max-w-none p-6">
            <h1 className="text-2xl font-bold text-gray-900">{t('nav.returns')}</h1>
            <p className="text-sm text-gray-500">ბოლო განახლება: იანვარი 2025</p>

            <h2>მნიშვნელოვანი შენიშვნა</h2>
            <p className="rounded-lg bg-amber-50 p-4 text-amber-800">
              GoldMarket.ge არის მარკეტპლეისი, რომელიც აკავშირებს გამყიდველებსა 
              და მყიდველებს. პლატფორმა არ მონაწილეობს ტრანზაქციებში და არ იღებს 
              პასუხისმგებლობას ნივთების დაბრუნებაზე. დაბრუნების პირობები 
              უნდა შეთანხმდეს უშუალოდ გამყიდველთან.
            </p>

            <h2>რეკომენდაციები მყიდველებისთვის</h2>
            <ul>
              <li>ყიდვამდე დეტალურად გაეცანით განცხადებას</li>
              <li>დასვით კითხვები გამყიდველს</li>
              <li>შეხვდით გამყიდველს საჯარო ადგილას</li>
              <li>შეამოწმეთ ნივთი ადგილზე ფულის გადახდამდე</li>
              <li>შეინახეთ ყველა ქვითარი და დოკუმენტი</li>
            </ul>

            <h2>რეკომენდაციები გამყიდველებისთვის</h2>
            <ul>
              <li>მიუთითეთ ზუსტი და სრული ინფორმაცია ნივთის შესახებ</li>
              <li>ატვირთეთ მაღალი ხარისხის ფოტოები</li>
              <li>პატიოსნად აღწერეთ ნივთის მდგომარეობა</li>
              <li>განსაზღვრეთ დაბრუნების პირობები განცხადებაში</li>
            </ul>

            <h2>დავების გადაწყვეტა</h2>
            <p>
              თუ დავა წარმოიშვა გამყიდველსა და მყიდველს შორის, 
              გირჩევთ პირველ რიგში ეცადოთ საკითხის მოგვარება პირდაპირი 
              კომუნიკაციით. თუ ვერ მოხერხდა, შეგიძლიათ მოგვმართოთ 
              support@goldmarket.ge მისამართზე.
            </p>

            <h2>ფასიანი სერვისების დაბრუნება</h2>
            <p>
              პლატფორმის ფასიანი სერვისები (VIP პაკეტები, გაძლიერებები) 
              არ ექვემდებარება დაბრუნებას გამოყენების შემდეგ. გამოუყენებელი 
              სერვისების დაბრუნება შესაძლებელია 7 დღის განმავლობაში.
            </p>

            <h2>კონტაქტი</h2>
            <p>
              კითხვების შემთხვევაში: support@goldmarket.ge
            </p>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
